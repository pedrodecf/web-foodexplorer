import { FiPlus, FiX } from "react-icons/fi"
import { Container } from "./style"

export function Tag({ $isnew, value, ...rest }) {
  return (
    <Container $isnew={$isnew}>
      <div className="tag-area">
        <div
          className="tag-items"
          style={{
            backgroundColor: $isnew ? "transparent" : "var(--light-600)",
            border: $isnew ? "dashed 1px var(--light-500)" : "none",
          }}
        >
          <input
            type="text"
            value={value}
            readOnly={!$isnew}
            style={{ color: $isnew ? "var(--light-500)" : "var(--light-100)" }}
          />
          <button
            className={$isnew ? "" : ""}
            style={{ color: $isnew ? "var(--light-500)" : "var(--light-100)" }}
          >
            {$isnew ? <FiPlus /> : <FiX />}
          </button>
        </div>
      </div>
    </Container>
  )
}
