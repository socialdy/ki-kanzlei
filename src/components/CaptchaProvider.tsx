import React, { createContext, useContext, useRef, useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaContextType {
    executeCaptcha: () => Promise<string | null>;
}

const CaptchaContext = createContext<CaptchaContextType | null>(null);

// Site Key for reCAPTCHA v2 Invisible
const RECAPTCHA_SITE_KEY = "6Lcnf1osAAAAAMpZZ4-IwfuM8Gdnf-DNnGGBKcDE";

export const useCaptcha = () => {
    const context = useContext(CaptchaContext);
    if (!context) {
        throw new Error("useCaptcha must be used within a CaptchaProvider");
    }
    return context;
};

export const CaptchaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const executeCaptcha = useCallback(async () => {
        if (!recaptchaRef.current) {
            console.warn("reCAPTCHA not ready");
            return null;
        }

        // If we already have a value, return it
        if (captchaValue) return captchaValue;

        try {
            // Add timeout to prevent hanging
            const timeoutPromise = new Promise<null>((_, reject) =>
                setTimeout(() => reject(new Error("reCAPTCHA timeout")), 5000)
            );

            const captchaPromise = recaptchaRef.current.executeAsync();
            const token = await Promise.race([captchaPromise, timeoutPromise]);
            return token;
        } catch (error) {
            console.error("reCAPTCHA execution failed:", error);
            return null;
        }
    }, [captchaValue]);

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value);
    };

    return (
        <CaptchaContext.Provider value={{ executeCaptcha }}>
            {children}
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
            />
        </CaptchaContext.Provider>
    );
};
