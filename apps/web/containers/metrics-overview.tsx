import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, CreditCard, DollarSign, Store } from "lucide-react"

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <DollarSign className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Spend</p>
            <h2 className="text-2xl font-bold">$955.83</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Transactions</p>
            <h2 className="text-2xl font-bold">26</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <BarChart2 className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Avg. Transaction</p>
            <h2 className="text-2xl font-bold">$36.76</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Store className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Merchants</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
        </div>
      </Card>
    </div>
  )
}

