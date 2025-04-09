import { format } from "date-fns"

function formatDateInUsPattern(value) {
    return format(value, "yyyy-MM-dd")
}

export { formatDateInUsPattern }