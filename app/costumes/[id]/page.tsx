import { costumes } from "../data";
import CostumeDetails from "./CostumeDetails";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CostumePage({ params }: Props) {
  const costume = costumes.find(c => c.id === parseInt(params.id));

  if (!costume) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Costume Not Found</h1>
          <Link href="/" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return <CostumeDetails costume={costume} />;
} 