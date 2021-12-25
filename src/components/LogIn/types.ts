export interface LogInProps {
  className?: string;
  onSave: (data: LogInData) => void;
}

export interface LogInData {
  login: string;
  fio?: string;
  password: string;
  signIn?: boolean;
}
