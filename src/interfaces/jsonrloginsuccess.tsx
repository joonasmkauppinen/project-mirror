interface JSONRLoginSuccess {
  success: boolean;
  token: string;
  session_id: number;
  error?: string;
}

export default JSONRLoginSuccess;
