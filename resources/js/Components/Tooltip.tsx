import { Tooltip as ReactTooltip } from "react-tooltip";

// Define the props interface for TypeScript
interface TooltipProps {
  id: string;
  tooltipMessage: string;
  content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ id, tooltipMessage, content }) => {
  return (
    <div className="example-container">
      {/* The tooltip will be attached automatically using these attributes */}
      <div data-tooltip-id={id} data-tooltip-html={tooltipMessage}>
        {content}
      </div>

      {/* Tooltip is initialized globally and will be automatically rendered */}
      <ReactTooltip
        clickable={true}
        id={id}
        place="top" // This ensures the tooltip shows above the element
        className="example-rounded transition-opacity duration-300 ease-in-out"
        style={{
         background: 'var(--bs-primary)',
         borderRadius: "6px",
        padding: "5px"
        }}
      />
    </div>
  );
};

export default Tooltip;

