import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/components/ui/use-toast';
import { otpService } from '@/lib/otpService';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    identifier: '', // email or phone
  });
  
  const [signupData, setSignupData] = useState({
    name: '',
    identifier: '', // email or phone
  });

  const [otpStep, setOtpStep] = useState<{
    show: boolean;
    identifier: string;
    type: 'login' | 'signup';
    userData?: any;
  }>({
    show: false,
    identifier: '',
    type: 'login'
  });

  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const validateIdentifier = (identifier: string) => {
    return otpService.isValidEmail(identifier) || otpService.isValidMobile(identifier);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateIdentifier(loginData.identifier)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid email or mobile number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    const generatedOtp = otpService.sendOTP(loginData.identifier);
    
    setTimeout(() => {
      setOtpStep({
        show: true,
        identifier: loginData.identifier,
        type: 'login'
      });
      setIsLoading(false);
      toast({
        title: "OTP Sent",
        description: `OTP sent to ${loginData.identifier}. For demo: ${generatedOtp}`,
      });
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name",
        variant: "destructive"
      });
      return;
    }

    if (!validateIdentifier(signupData.identifier)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid email or mobile number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    const generatedOtp = otpService.sendOTP(signupData.identifier);
    
    setTimeout(() => {
      setOtpStep({
        show: true,
        identifier: signupData.identifier,
        type: 'signup',
        userData: { name: signupData.name }
      });
      setIsLoading(false);
      toast({
        title: "OTP Sent",
        description: `OTP sent to ${signupData.identifier}. For demo: ${generatedOtp}`,
      });
    }, 1000);
  };

  const handleOtpVerification = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const isValid = otpService.verifyOTP(otpStep.identifier, otp);
      
      if (isValid) {
        // Store user session
        const userData = {
          identifier: otpStep.identifier,
          name: otpStep.userData?.name || 'User',
          loginTime: new Date().toISOString()
        };
        localStorage.setItem('user', JSON.stringify(userData));
        
        toast({
          title: "Success!",
          description: `${otpStep.type === 'login' ? 'Logged in' : 'Account created'} successfully`,
        });
        
        // Redirect to dashboard or home
        navigate('/');
      } else {
        toast({
          title: "Invalid OTP",
          description: "The OTP you entered is invalid or expired",
          variant: "destructive"
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleBackToForm = () => {
    setOtpStep({ show: false, identifier: '', type: 'login' });
    setOtp('');
  };

  return (
    <div className="min-h-screen bg-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
            <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 left-4"
            onClick={otpStep.show ? handleBackToForm : () => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logo} alt="Delhuan Dairy" className="h-16 w-auto" />
          </div>
          
          <h1 className="text-2xl font-poppins font-bold text-primary">
            Delhuan Dairy Portal
          </h1>
          <p className="text-muted-foreground">
            Access your dairy farmer account
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="premium-gradient text-white rounded-t-lg">
            <CardTitle className="text-center text-xl font-poppins">
              Farmer Portal Access
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6">
            {otpStep.show ? (
              /* OTP Verification */
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Verify OTP</h3>
                  <p className="text-sm text-muted-foreground">
                    We've sent a 6-digit code to {otpStep.identifier}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <div className="flex justify-center ">
                      <InputOTP value={otp} onChange={setOtp} maxLength={6}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0}  className='border-2 border-black mx-1'/>
                          <InputOTPSlot index={1}  className='border-2 border-black mx-1'/>
                          <InputOTPSlot index={2}  className='border-2 border-black mx-1'/>
                          <InputOTPSlot index={3}  className='border-2 border-black mx-1'/>
                          <InputOTPSlot index={4}  className='border-2 border-black mx-1'/>
                          <InputOTPSlot index={5}  className='border-2 border-black mx-1'/>
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>

                  <Button 
                    onClick={handleOtpVerification} 
                    className="w-full premium-gradient text-white"
                    disabled={isLoading || otp.length !== 6}
                  >
                    {isLoading ? 'Verifying...' : 'Verify OTP'}
                  </Button>

                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        const newOtp = otpService.sendOTP(otpStep.identifier);
                        toast({
                          title: "OTP Resent",
                          description: `New OTP sent. For demo: ${newOtp}`,
                        });
                      }}
                    >
                      Resend OTP
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="identifier">Email or Mobile Number</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="identifier"
                          name="identifier"
                          value={loginData.identifier}
                          onChange={handleLoginChange}
                          placeholder="Enter email or mobile number"
                          className="pl-10"
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        We'll send an OTP to verify your identity
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full premium-gradient text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending OTP...' : 'Send OTP'}
                    </Button>
                  </form>
                </TabsContent>

                {/* Signup Tab */}
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={signupData.name}
                        onChange={handleSignupChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signupIdentifier">Email or Mobile Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signupIdentifier"
                          name="identifier"
                          value={signupData.identifier}
                          onChange={handleSignupChange}
                          placeholder="Enter email or mobile number"
                          className="pl-10"
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        We'll send an OTP for verification
                      </p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <label className="flex items-start space-x-2">
                        <input type="checkbox" className="rounded border-border mt-1" required />
                        <span>
                          I agree to the Terms of Service and Privacy Policy of Delhuan Dairy & Animal Care
                        </span>
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full accent-gradient text-black font-medium"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending OTP...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>

        
      </div>
    </div>
  );
};

export default Login;