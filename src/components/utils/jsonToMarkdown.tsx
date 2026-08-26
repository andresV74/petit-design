type MarkdownNode = {
	type: 'root' | 'paragraph' | 'list' | 'list-item' | 'text'
	children?: MarkdownNode[]
	listType?: 'ordered' | 'unordered'
	value?: string
	bold?: boolean
	italic?: boolean
};

export function jsonToMarkdown(node: MarkdownNode): string {
	if (!node) return ''

	switch (node.type) {
		case 'root':
			return node.children?.map(jsonToMarkdown).join('\n\n') || ''

		case 'paragraph':
			return node.children?.map(jsonToMarkdown).join('') || ''

		case 'list': {
			const isOrdered = node.listType === 'ordered'
			return node.children?.map((item, index) => {
					const prefix = isOrdered ? `${index + 1}. ` : '- '
					return `${prefix}${jsonToMarkdown(item)}`
				})
				.join('\n') || ''
		}

		case 'list-item':
			return node.children?.map(jsonToMarkdown).join('') || ''

		case 'text': {
			let text = node.value || ''
			if (node.bold) text = `**${text}**`
			if (node.italic) text = `*${text}*`
			return text
		}

		default:
			return ''
	}
}
