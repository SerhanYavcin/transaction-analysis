import { Card } from "@/components/ui/card"
import { DetectedPattern } from "@/types/detected-pattern.type"

export function PatternDetection({ detectedPatterns }: { detectedPatterns: DetectedPattern[] }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Detected Patterns</h2>
        <p className="text-sm text-muted-foreground">Subscription and recurring payment detection</p>
      </div>

      <div className="space-y-4">
        {detectedPatterns.map((pattern, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-semibold">{pattern.merchant}</h3>
                <p className="text-sm text-muted-foreground">
                  {pattern.type} • {pattern.frequency}
                </p>
                <p className="text-sm text-muted-foreground">{pattern.notes}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="font-semibold">{pattern.amount}</p>
                {pattern.next_expected && <p className="text-sm text-muted-foreground">Next: {pattern.next_expected}</p>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

