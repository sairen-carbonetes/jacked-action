// Check if user input fail-criteria is valid
export function SeverityCheck(failCriteria, severity_type) {

    if (!severity_type.some(
            (severity) => typeof failCriteria.toLowerCase() === "string" && severity === failCriteria.toLowerCase()
        )
    ) {
        throw new Error(
            `Undefined Severity ${failCriteria} -> Please choose: unknown, negligible, low, medium, high, or critical`
        )
    }
}