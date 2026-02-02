import React, { createContext, useContext, useRef, useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaContextType {
    executeCaptcha: () => Promise<string | null>;
}

const CaptchaContext = createContext<CaptchaContextType | null>(null);

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
        if (!recaptchaRef.current) return null;

        // If we already have a value, return it
        if (captchaValue) return captchaValue;

        try {
            const token = await recaptchaRef.current.executeAsync();
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
            <div className="hidden">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "YOUR_SITE_KEY_MISSING"}
                    onChange={handleCaptchaChange}
                />
            </div>
        </CaptchaContext.Provider>
    );
};
