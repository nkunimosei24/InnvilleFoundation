// src/hooks/useAllPrograms.js
import { useEffect, useState } from "react";
import { programs as staticPrograms } from "../utils/program";
import { mapDbProgram } from "../utils/mapDbProgram";
import { supabase } from "../lib/src/lib/supabase";

export function useAllPrograms() {
  const [dbPrograms, setDbPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchDbPrograms = async () => {
      const { data, error } = await supabase.from("programs").select("*");
      if (!error && isMounted) setDbPrograms(data.map(mapDbProgram));
      if (isMounted) setLoading(false);
    };

    fetchDbPrograms();
    return () => {
      isMounted = false;
    };
  }, []);

  return { allPrograms: [...staticPrograms, ...dbPrograms], loading };
}