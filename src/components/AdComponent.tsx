import { useEffect } from "react";

interface AdComponentProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

// Replace ca-pub-XXXXXXXXXXXX with your actual AdSense publisher ID
const AD_CLIENT = "ca-pub-XXXXXXXXXXXX";

const AdComponent: React.FC<AdComponentProps> = ({
  slot,
  format = "auto",
  className = "",
}) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      // AdSense not loaded yet
    }
  }, []);

  return (
    <div className={`ad-container my-4 text-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdComponent;
