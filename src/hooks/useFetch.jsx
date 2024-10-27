import React, { useRef, useState } from 'react';
import { collection, query, where, getDocs, limit, startAfter } from "firebase/firestore"; 
import { db } from '../Config/Firebase';

export const useFetch = () => {
    const [allDataFetched, setAllDataFetched] = useState(false);
    const [lastDoc, setLastDoc] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const isFetching = useRef(false);

    const Gfetch = async (category = "") => {
        if (isFetching.current) {
            return;
        }
        isFetching.current = true;

        try {
            const homeCollectionRef = collection(db, "home");
            let q;

            if (category) {
                q = query(
                    homeCollectionRef,
                    where("contentType", "==", category),
                    limit(2),
                    ...(lastDoc ? [startAfter(lastDoc)] : [])
                );
            } else {
                q = query(
                    homeCollectionRef,
                    limit(2),
                    ...(lastDoc ? [startAfter(lastDoc)] : [])
                );
            }

            const querySnapshot = await getDocs(q);
   
            if (querySnapshot.empty) {
                console.log("No more documents found.");
                setAllDataFetched(true); // Set this to true if no more documents are found
                return;
            }
            
            const fetchedDocuments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

            setLastDoc(lastVisible);
            setData(prev => ([...prev, ...fetchedDocuments])); // Append new documents
          
        } catch (error) {
            setError(true);
            console.error("Error fetching documents:", error);
        } finally {
            isFetching.current = false;
        }
    };

    return { data, Gfetch, allDataFetched, error };
};