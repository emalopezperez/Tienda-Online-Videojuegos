import BasicLayout from "../layout/basicLayout/BasicLayout"
import Main from "../components/main/Main";

export default function Home() {
  return (
    <BasicLayout className="min-h-screen flex flex-col">
      <Main/>
    </BasicLayout>
  );
}
