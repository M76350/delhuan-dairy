interface OTPData {
  identifier: string; // email or phone
  otp: string;
  timestamp: number;
  expiresAt: number;
}

class OTPService {
  private otpStorage: Map<string, OTPData> = new Map();
  private readonly OTP_EXPIRY_MINUTES = 5;

  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  sendOTP(identifier: string): string {
    const otp = this.generateOTP();
    const now = Date.now();
    const expiresAt = now + (this.OTP_EXPIRY_MINUTES * 60 * 1000);

    this.otpStorage.set(identifier, {
      identifier,
      otp,
      timestamp: now,
      expiresAt
    });

    // Mock sending OTP (in real app, this would call SMS/Email service)
    console.log(`OTP for ${identifier}: ${otp}`);
    
    return otp;
  }

  verifyOTP(identifier: string, enteredOTP: string): boolean {
    const otpData = this.otpStorage.get(identifier);
    
    if (!otpData) {
      return false;
    }

    const now = Date.now();
    if (now > otpData.expiresAt) {
      this.otpStorage.delete(identifier);
      return false;
    }

    const isValid = otpData.otp === enteredOTP;
    if (isValid) {
      this.otpStorage.delete(identifier);
    }

    return isValid;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidMobile(mobile: string): boolean {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile.replace(/\s+/g, ''));
  }
}

export const otpService = new OTPService();