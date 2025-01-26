import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload } from "lucide-react"
import { MetricsOverview } from "./metrics-overview"
import { NormalizedMerchants } from "./normalized-merchants"

export default function TransactionAnalyzer() {
  return (
    <div className="p-6 max-w-[1200px] mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Transaction Analyzer</h1>
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Upload CSV
        </Button>
      </div>

      <MetricsOverview />

      <Tabs defaultValue="merchant-analysis" className="w-full">
        <TabsList>
          <TabsTrigger value="merchant-analysis">Merchant Analysis</TabsTrigger>
          <TabsTrigger value="pattern-detection">Pattern Detection</TabsTrigger>
        </TabsList>
        <TabsContent value="merchant-analysis">
          <Card className="p-6">
            <NormalizedMerchants />
          </Card>
        </TabsContent>
        <TabsContent value="pattern-detection">
          <Card className="p-6">
            <p className="text-muted-foreground">Pattern detection content would go here</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

