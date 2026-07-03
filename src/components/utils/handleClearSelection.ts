/**
 * Clears the fabric selection and closes the dialog modal
 */
export function handleClearSelection(
	onFabricSelect: (id: string) => void,
	dialogRef: React.RefObject<HTMLDialogElement>
) {
	onFabricSelect('')
	dialogRef.current?.close()
}
