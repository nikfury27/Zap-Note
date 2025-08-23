import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";

const Home = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8 max-w-screen-sm mx-auto w-full bg-gray-50">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-4">ZapNote App</h1>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <NoteForm />
        </div>
        <NoteList />
      </div>
    </div>
  );
};

export default Home;

