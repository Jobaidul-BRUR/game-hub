import {useEffect, useState} from "react";
import ApiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    ApiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then(response => setGames(response.data.results))
        .catch(error => {
          if (error instanceof CanceledError) return;
          setError(error.message)
        })
    return () => controller.abort();
  }, []);

  return {games, error};
}

export default useGames;
