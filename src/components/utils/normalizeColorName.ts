/**
 * Normalizes a color name into a translation key fragment:
 * lowercase, accents removed and spaces replaced by underscores.
 */
export function normalizeColorName(name?: string) {
	return (name ?? '')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/\s+/g, '_')
}
