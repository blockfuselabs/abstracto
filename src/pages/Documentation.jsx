import { Snippet } from "@nextui-org/snippet";

const Documentation = () => {
  return (
    <div className="mt-16 pb-4 text-white w-full bg-gray-900  min-h-[100vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-3xl ">Documentation </h1>
        <p className="text-xl w-3/5 pt-8">
          Abstractor is a powerful command-line development environment designed
          to simplify and streamline the implementation of account abstraction
          in blockchain applications. By leveraging account abstraction,
          abstractor enables developers to create more flexible and user-centric
          transaction systems, breaking free from traditional account
          constraints. With a suite of tools for managing smart contracts,
          customizing wallet interactions, and optimizing transaction flows,
          abstractor makes it easier to build secure, scalable, and efficient
          blockchain solutions.
        </p>
        <h1 className="font-extrabold text-3xl  ">Installation </h1>
        <p className="p-4 text-xl">To get started you have to install abstractor using your command line </p>        
        <p className="p-4 text-xl"> to install abstracto run the following command on your terminal</p>
        <div className="border bg-slate-100  py-1 px-3 w-2/4 mt-4 rounded-xl">
        <Snippet size="sm" className="flex text-lg text-slate-800 items-center gap-4">npm install @nextui-org/react</Snippet>
        </div>
        <p className=" p-4 text-xl">to initialised a new abstracto project run this command on your terminal</p>
        <div className="border  bg-slate-100 py-1 px-3 w-2/4 mt-4 rounded-xl">
        <Snippet size="sm" className="flex text-lg text-slate-800 items-center gap-4">abstracto init &lt;project-name&gt; 
        </Snippet>

        </div>
        <p>This will create a new abstracto project </p>

      </div>
    </div>
  );
};

export default Documentation;
