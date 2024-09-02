function ErrorMessage({ error }: any) {
  return <p className="text-sm text-red-500">{error.message}</p>;
}

export default ErrorMessage;
