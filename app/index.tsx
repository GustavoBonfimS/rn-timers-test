import { useAppState } from "@/hooks/useAppState";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  const appState = useAppState();

  console.log('app state', appState);
  console.log('count', count);
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('setting count..');
      
      setCount(prev => prev + 1)
    }, 2000)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Count: {count}</Text>
    </View>
  );
}
