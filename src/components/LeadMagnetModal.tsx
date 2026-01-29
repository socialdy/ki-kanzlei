import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Austrian and common international phone number regex
// Supports optional +, area codes, spaces, dashes
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s0-9])+$/;

const formSchema = z.object({
    name: z.string()
        .min(2, "Bitte geben Sie Ihren vollständigen Namen an.")
        .max(50, "Der Name ist zu lang."),
    phone: z.string()
        .min(5, "Die Telefonnummer ist zu kurz.")
        .regex(phoneRegex, "Bitte geben Sie eine gültige Telefonnummer an (z.B. +43 664 ...)."),
    email: z.string()
        .email("Bitte geben Sie eine gültige E-Mail Adresse an.")
        .min(5, "Die E-Mail Adresse ist zu kurz."),
    // Honeypot field (hidden from users)
    website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadMagnetModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export const LeadMagnetModal = ({ isOpen, onOpenChange }: LeadMagnetModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onBlur", // Validate when user leaves the field
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            website: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            // Prevent submission if honeypot is filled (bot detection)
            if (data.website) {
                console.warn("Spam detected via honeypot.");
                return;
            }

            setIsSubmitting(true);

            // n8n Webhook Integration
            const webhookUrl = "https://n8n.srv1215699.hstgr.cloud/webhook/21a27d91-48f8-45f9-a116-2c2a0dfc1144";

            // Sending as POST (standard for form data)
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    submittedAt: new Date().toISOString(),
                    source: "Website Lead Magnet",
                }),
            });

            if (!response.ok) {
                throw new Error("Der Server konnte die Anfrage nicht verarbeiten.");
            }

            console.log("Lead successfully sent to n8n:", data);
            setIsSubmitting(false);
            setIsSuccess(true);
            toast.success("Das Material ist auf dem Weg!");
        } catch (error) {
            console.error("Submission error details:", error);
            setIsSubmitting(false);

            if (error instanceof TypeError && error.message === "Failed to fetch") {
                toast.error("Verbindung zum n8n-Server blockiert (CORS oder Workflow nicht aktiv).");
            } else {
                toast.error(error instanceof Error ? error.message : "Ein technischer Fehler ist aufgetreten.");
            }
        }
    };

    const handleClose = () => {
        onOpenChange(false);
        // Reset form state after modal animation finishes
        setTimeout(() => {
            setIsSuccess(false);
            reset();
        }, 300);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[460px] overflow-hidden border-none bg-white p-0 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.15)] rounded-[32px]">
                {!isSuccess ? (
                    <div className="relative pt-8">
                        <div className="p-10 md:p-12 space-y-8">
                            <div className="space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="inline-flex px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold tracking-wider uppercase">
                                    Exklusiver Einblick
                                </div>
                                <DialogHeader className="space-y-4">
                                    <DialogTitle className="text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                                        Echtes Infomaterial. <br />
                                        <span className="text-primary italic">KOSTENLOS nur für dich.</span>
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-500 text-lg font-medium leading-relaxed">
                                        Sie erhalten direkten Einblick in die Tools und Prozesse, die wir bei unseren Kunden in Österreich wirklich implementieren.
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Honeypot - Hidden from users */}
                                <div className="sr-only">
                                    <Input {...register("website")} tabIndex={-1} autoComplete="off" />
                                </div>

                                <div className="space-y-4">
                                    {/* Name Field */}
                                    <div className="space-y-1.5">
                                        <Label
                                            htmlFor="name"
                                            className={cn("text-xs font-bold ml-1 uppercase tracking-wide", errors.name ? "text-destructive" : "text-gray-500")}
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            {...register("name")}
                                            placeholder="Ihr voller Name"
                                            className={cn(
                                                "h-12 border-2 rounded-2xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 transition-all focus:ring-0 text-base",
                                                errors.name ? "border-destructive/50 focus:border-destructive" : "border-gray-100 focus:border-primary/20"
                                            )}
                                        />
                                        {errors.name && (
                                            <p className="text-xs font-semibold text-destructive ml-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                                                <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone Field */}
                                    <div className="space-y-1.5">
                                        <Label
                                            htmlFor="phone"
                                            className={cn("text-xs font-bold ml-1 uppercase tracking-wide", errors.phone ? "text-destructive" : "text-gray-500")}
                                        >
                                            Telefon
                                        </Label>
                                        <Input
                                            id="phone"
                                            {...register("phone")}
                                            type="tel"
                                            placeholder="+43 664 ..."
                                            className={cn(
                                                "h-12 border-2 rounded-2xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 transition-all focus:ring-0 text-base",
                                                errors.phone ? "border-destructive/50 focus:border-destructive" : "border-gray-100 focus:border-primary/20"
                                            )}
                                        />
                                        {errors.phone && (
                                            <p className="text-xs font-semibold text-destructive ml-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                                                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div className="space-y-1.5">
                                        <Label
                                            htmlFor="email"
                                            className={cn("text-xs font-bold ml-1 uppercase tracking-wide", errors.email ? "text-destructive" : "text-gray-500")}
                                        >
                                            E-Mail Adresse
                                        </Label>
                                        <Input
                                            id="email"
                                            {...register("email")}
                                            type="email"
                                            placeholder="Deine beste E-Mail Adresse"
                                            className={cn(
                                                "h-12 border-2 rounded-2xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 transition-all focus:ring-0 text-base",
                                                errors.email ? "border-destructive/50 focus:border-destructive" : "border-gray-100 focus:border-primary/20"
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="text-xs font-semibold text-destructive ml-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                                                <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 text-lg font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-5 w-5 animate-spin" />
                                                    Einen Moment...
                                                </>
                                            ) : (
                                                <>
                                                    PDF jetzt kostenlos anfordern
                                                    <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </span>
                                    </Button>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-gray-400 justify-center font-bold tracking-tight">
                                    <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                                    Privatsphäre ist uns wichtig. 100% DSGVO‑konform.
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="p-12 md:p-16 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="w-20 h-20 rounded-[28px] bg-primary/5 flex items-center justify-center text-primary rotate-3 transition-transform hover:rotate-0">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900 leading-tight">Geschafft! 🚀</h3>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Dein Whitepaper ist auf dem Weg. Schau kurz in dein Postfach – darin steckt unser geballtes Wissen.
                            </p>
                        </div>
                        <Button
                            onClick={handleClose}
                            className="w-full sm:w-auto px-10 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98] rounded-2xl"
                        >
                            Fenster schließen
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
