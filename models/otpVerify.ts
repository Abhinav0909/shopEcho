export interface otpParams{
  email: string,
  otp: string,
  newPassword:string,
}

export interface CheckResult {
  status: number,
  message:string,
}