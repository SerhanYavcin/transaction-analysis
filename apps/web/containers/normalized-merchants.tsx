import { Badge } from "@/components/ui/badge"

interface Merchant {
  original: string
  normalized: string
  tags: string[]
}

const merchants: Merchant[] = [
  {
    original: "NFLX DIGITAL NTFLX US",
    normalized: "Netflix",
    tags: ["Entertainment", "Streaming Services", "subscription", "digital_service", "monthly"],
  },
  {
    original: "AMZN MKTP US*Z1234ABC",
    normalized: "Amazon",
    tags: ["Shopping", "Online Retail", "online_purchase", "marketplace"],
  },
  {
    original: "UBER *TRIP HELP.UBER.CO",
    normalized: "Uber",
    tags: ["Transportation", "Ride Sharing", "transportation", "service"],
  },
  {
    original: "SPOTIFY P5D4E9B1D1",
    normalized: "Spotify",
    tags: ["Entertainment", "Streaming Services", "subscription", "digital_service", "monthly"],
  },
  {
    original: "STARBUCKS STORE #8752",
    normalized: "Starbucks",
    tags: ["Food & Drink", "Coffee Shop", "frequent", "food_and_beverage"],
  },
]

export function NormalizedMerchants() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Normalized Merchants</h2>
        <p className="text-sm text-muted-foreground">AI-powered merchant name normalization and categorization</p>
      </div>

      <div className="space-y-4">
        {merchants.map((merchant, index) => (
          <div key={index} className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-muted-foreground">Original</p>
                <p className="font-medium">{merchant.original}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Normalized</p>
                <p className="font-medium">{merchant.normalized}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {merchant.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

