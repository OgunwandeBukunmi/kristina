declare module "@editorjs/marker" {
  const Marker: any;
  export default Marker;
}

declare module "@editorjs/underline" {
  const Underline: any;
  export default Underline;
}

declare module "editorjs-text-color-plugin" {
  export class TextColorPlugin {
    constructor(config?: any);
    render(): HTMLElement;
    save(blockContent: HTMLElement): any;
    static get toolbox(): { title: string; icon: string };
  }
}

declare module "@editorjs/image" {
  const ImageTool: any;
  export default ImageTool;
}

declare module "@editorjs/list" {
  const List: any;
  export default List;
}

declare module "@editorjs/header" {
  const Header: any;
  export default Header;
}

declare module "@editorjs/paragraph" {
  const Paragraph: any;
  export default Paragraph;
}
