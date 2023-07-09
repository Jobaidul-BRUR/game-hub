import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error, isLoading } = useData<Platform>(
    "platforms/lists/parents"
  );
  const platforms = data;
  return { platforms, error, isLoading };
};

export default usePlatforms;
