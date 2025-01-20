export type UserType = {
  email: string;
  username: string;
  id: string;
  name: string;
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

export type PostForm = {
  title: string;
  content: string;
  status: string;
};
