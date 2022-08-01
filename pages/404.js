import Layout from "@/components/Layouts/LayoutAnimation";

const ErrorPage = () => {
  return (
    <Layout title="Error">
      <div className="h-[calc(100vh-230px)] flex items-center justify-center">
        <h1 className="text-2xl">404 - Error</h1>
      </div>
    </Layout>
  );
};

export default ErrorPage;
