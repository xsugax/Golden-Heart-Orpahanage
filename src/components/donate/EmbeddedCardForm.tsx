"use client";

import { CreditCard, Shield, Lock } from "lucide-react";

interface CardFormProps {
  amount: number;
  frequency: string;
  tier: string;
  frequencyUnit: string;
}

export default function EmbeddedCardForm({
  amount,
  frequencyUnit,
}: CardFormProps) {
  return (
    <div className="text-center py-10 space-y-4">
      <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
        <CreditCard className="w-8 h-8 text-amber-600" />
      </div>
      <h3 className="text-xl font-bold text-navy-900">
        Card Payments Coming Soon
      </h3>
      <p className="text-slate-600 max-w-md mx-auto">
        Secure card payment processing is being set up. In the meantime, please
        use PayPal or Crypto to make your ${amount.toLocaleString()}
        {frequencyUnit} donation.
      </p>
      <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-2">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" /> 256-bit SSL
        </span>
        <span className="flex items-center gap-1">
          <Lock className="w-3 h-3" /> Secure
        </span>
      </div>
    </div>
  );
}
