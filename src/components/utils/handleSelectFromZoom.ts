/**
 * Stores the fabric chosen from the dialog modal and closes the modal
 *
 * @param zoomFabric fabric object that is currently zoomed in the dialog modal
 * @param onFabricSelect callback function to handle the fabric selection
 * @param setZoomFabric callback function to reset the zoomFabric state
 * @param dialogRef reference to the dialog element to close it
 */

import type { Fabric } from "../products/FabricSelector"

export function handleSelectFromZoom(
	fabric: Fabric | null,
	onFabricSelect: (id: string) => void,
	setZoomFabric: (fabric: Fabric | null) => void,
	dialogRef: React.RefObject<HTMLDialogElement>) {
	if (fabric) {
		onFabricSelect(fabric.id)
		setZoomFabric(null)
		dialogRef.current?.close()
	}
}
