import JobOrderForm from './JobOrderForm';
import { JobProvider } from './JobContext';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <JobProvider>
        <JobOrderForm />
      </JobProvider>
    </div>
  );
};

export default App;
