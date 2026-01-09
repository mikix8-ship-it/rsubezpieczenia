"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Button from "./Button";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  if (!mounted || !showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-surface border-t border-border shadow-2xl">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary mb-1">
              Używamy plików cookie
            </h3>
            <p className="text-sm text-text-secondary">
              Ta strona używa plików cookie, aby zapewnić najlepsze wrażenia z użytkowania. 
              Kontynuując przeglądanie, wyrażasz zgodę na ich użycie.{" "}
              <a href="/cookies" className="text-accent hover:underline">
                Dowiedz się więcej
              </a>
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={rejectCookies}>
              Odrzuć
            </Button>
            <Button variant="primary" size="sm" onClick={acceptCookies}>
              Akceptuję
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
