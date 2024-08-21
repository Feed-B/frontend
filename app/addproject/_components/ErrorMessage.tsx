function ErrorMessage({ error }: any) {
  return (
    <div className="h-4">
      <p className="text-sm text-red-500">{error.message}</p>
    </div>
  );
}

export default ErrorMessage;
