import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

export default function GeminiAIPOC() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const callGemini = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("http://192.168.1.8:3001/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: "Explain how AI works in a few words",
        }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setResult(data.text || "No response");
    } catch (e: any) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Ask Gemini AI" onPress={callGemini} disabled={loading} />
      {loading && <ActivityIndicator style={{ marginTop: 16 }} />}
      {result && <Text style={styles.result}>{result}</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  result: { marginTop: 24, fontSize: 16, color: "#333" },
  error: { marginTop: 24, fontSize: 16, color: "red" },
});
