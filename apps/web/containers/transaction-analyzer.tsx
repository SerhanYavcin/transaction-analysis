import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload } from "lucide-react";
import { MetricsOverview } from "./metrics-overview";
import { NormalizedMerchants } from "./normalized-merchants";
import { NormalizedTransaction } from "@/types/normalized-transcation.type";
import { useState } from "react";
import { PatternDetection } from "./pattern-detection";
import { DetectedPattern } from "@/types/detected-pattern.type";
import { PostLoading } from "@/components/ui/post-loading";

export default function TransactionAnalyzer() {
  const [isLoading, setIsLoading] = useState(false);
  const [normalizedTransactions, setNormalizedTransactions] = useState<
    NormalizedTransaction[]
  >([]);
  const [detectedPatterns, setDetectedPatterns] = useState<DetectedPattern[]>(
    []
  );

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();

      formData.append("file", file);

      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        setNormalizedTransactions(data.normalized_transactions);
        setDetectedPatterns(data.detected_patterns);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto space-y-6">
      {isLoading && <PostLoading />}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Transaction Analyzer</h1>
        <Button variant="outline" className="relative">
          <Upload className="mr-2 h-4 w-4" />
          Upload CSV
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              opacity: 0,
              position: "absolute",
              width: "100%",
              cursor: "pointer",
              zIndex: 2,
            }}
          />
        </Button>
      </div>
      <MetricsOverview detectedPatterns={detectedPatterns} />
      <Tabs defaultValue="merchant-analysis" className="w-full">
        <TabsList>
          <TabsTrigger value="merchant-analysis">Merchant Analysis</TabsTrigger>
          <TabsTrigger value="pattern-detection">Pattern Detection</TabsTrigger>
        </TabsList>
        <TabsContent value="merchant-analysis">
          <Card className="p-6">
            {normalizedTransactions.length > 0 ? (
              <NormalizedMerchants
                normalizedTransactions={normalizedTransactions}
              />
            ) : (
              <p className="text-muted-foreground">
                No transactions uploaded yet
              </p>
            )}
          </Card>
        </TabsContent>
        <TabsContent value="pattern-detection">
          <Card className="p-6">
            {detectedPatterns.length > 0 ? (
              <PatternDetection detectedPatterns={detectedPatterns} />
            ) : (
              <p className="text-muted-foreground">No patterns detected yet</p>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
