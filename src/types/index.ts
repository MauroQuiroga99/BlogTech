export type UserType = {
  email: string;
  userName: string;
};

export type LoginForm = {
  email_or_username: string;
  password: string;
};

export type RegisterForm = {
  name: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
};
