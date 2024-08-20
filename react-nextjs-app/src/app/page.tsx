import Counter from './components/counter';

export default function Home() {
  return (
    <main className="bg-pastelOrange flex min-h-screen flex-col items-center justify-center">
      <div className="bg-pastelDarkRed container mx-auto px-4 md:px-8 lg:px-16 rounded-lg">
        <h2 className="bg-pastelDarkRed text-3xl font-bold text-center mb-8">Redux Counter</h2>
        <div className="bg-pastelBlue p-6 rounded-lg shadow-md">
          <div className="flex justify-center"><Counter /></div>
        </div>
      </div>
    </main>
  );
}