type HtmlNode = {
	type: 'root' | 'paragraph' | 'list' | 'list-item' | 'text'
	children?: HtmlNode[]
	listType?: 'ordered' | 'unordered'
	value?: string
	bold?: boolean
	italic?: boolean
}
export function jsonToHtml(node: HtmlNode): string {
  if (!node) return '';
	const pContent = node.children?.map(jsonToHtml).join('');
	const tag = node.listType === 'ordered' ? 'ol' : 'ul';
	const items = node.children?.map(jsonToHtml).join('\n  ');
	const itemContent = node.children?.map(jsonToHtml).join('');
	let text = node.value || '';

  switch (node.type) {
    case 'root':
      return node.children?.map(jsonToHtml).join('\n') ?? '';

    case 'paragraph':
      return `<p>${pContent}</p>`;

    case 'list':
      return `<${tag}>\n  ${items}\n</${tag}>`;

    case 'list-item':
      return `<li>${itemContent}</li>`;

    case 'text':
      // Escapar caracteres HTML básicos por seguridad
      text = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      if (node.bold) text = `<strong>${text}</strong>`;
      if (node.italic) text = `<em>${text}</em>`;
      return text;

    default:
      return '';
  }
}