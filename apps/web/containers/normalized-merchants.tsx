import { Badge } from "@/components/ui/badge";
import { NormalizedTransaction } from "@/types/normalized-transcation.type";

export function NormalizedMerchants({
  normalizedTransactions,
}: {
  normalizedTransactions: NormalizedTransaction[];
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Normalized Merchants</h2>
        <p className="text-sm text-muted-foreground">
          AI-powered merchant name normalization and categorization
        </p>
      </div>

      <div className="space-y-4">
        {normalizedTransactions.map((merchant, index) => (
          <div
            key={index}
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-muted-foreground">Original</p>
                <p className="font-medium">{merchant.original}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Normalized</p>
                <p className="font-medium">{merchant.normalized.merchant}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge key={merchant.normalized.category} variant="secondary">
                {merchant.normalized.category}
              </Badge>
              <Badge key={merchant.normalized.sub_category} variant="secondary">
                {merchant.normalized.sub_category}
              </Badge>

              {merchant.normalized.flags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
