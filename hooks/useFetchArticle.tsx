import { useEffect, useState } from 'react';

const useFetchArticle = (id: string) => {
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://static.newsfilter.io/${id}.html`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.text();
        setArticle(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return { article, loading, error };
}

export default useFetchArticle;
