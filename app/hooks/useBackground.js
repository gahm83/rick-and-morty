// 'use client'
import { useEffect, useState } from "react";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const formattedNumber = (number) => 
  number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

const hourQuarters = {
  '1': [0, 14],
  '2': [15, 29],
  '3': [31, 44],
  '4': [45, 29]
}

const imageIDs = {
  '1': [1, 3],
  '2': [4, 6],
  '3': [7, 9],
  '4': [9, 12]
}

export default function useBackground() {
  const [image, setImage] = useState('');
  useEffect(() => {
    const dateMinutes = new Date().getMinutes();
    for (const minmax in hourQuarters) {
      if (dateMinutes >= hourQuarters[minmax][0] && dateMinutes <= hourQuarters[minmax][1]) {
        const imageNumber = getRandomInt(imageIDs[minmax][0], imageIDs[minmax][1]);
        const setString = formattedNumber(imageNumber)
        setImage(imageNumber);
      }
    }
  }, []);
  return formattedNumber(image);
}