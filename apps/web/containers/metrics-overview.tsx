import { Card } from "@/components/ui/card"
import { DetectedPattern } from "@/types/detected-pattern.type"
import { BarChart2, CreditCard, DollarSign, Store } from "lucide-react"

export function MetricsOverview({ detectedPatterns }: { detectedPatterns: DetectedPattern[] }) {

  const totalSpend = detectedPatterns.reduce((acc, pattern) => acc + pattern.amount, 0) || 0;
  const totalTransactions = detectedPatterns.length || 0;
  const avgTransaction = totalSpend / totalTransactions || 0;

  // Unique merchants
  const uniqueMerchants = detectedPatterns.reduce((acc, pattern) => {
    if (!acc.includes(pattern.merchant)) {
      acc.push(pattern.merchant);
    }
    return acc;
  }, [] as string[]);

  const totalMerchants = uniqueMerchants.length || 0;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <DollarSign className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Spend</p>
            <h2 className="text-2xl font-bold">${totalSpend.toFixed(2)}</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Transactions</p>
            <h2 className="text-2xl font-bold">{totalTransactions}</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <BarChart2 className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Avg. Transaction</p>
            <h2 className="text-2xl font-bold">${avgTransaction.toFixed(2)}</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Store className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Merchants</p>
            <h2 className="text-2xl font-bold">{totalMerchants}</h2>
          </div>
        </div>
      </Card>
    </div>
  )
}

