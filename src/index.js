import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl, SelectControl } from '@wordpress/components';

registerBlockType('ssgb/dynamic-block', {
    title: 'SoyebSalar Block',
    icon: 'smiley',
    category: 'common',

    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
        subtitle: {
            type: 'string',
            source: 'html',
            selector: 'h4',
        },
        buttonText: {
            type: 'string',
            default: 'Click Here',
        },
        buttonUrl: {
            type: 'string',
            default: '#',
        },
        imageUrl: {
            type: 'string',
            default: '',
        },
        imageSize: {
            type: 'string',
            default: 'medium',
        },
        imageAlignment: {
            type: 'string',
            default: 'center',
        },
        titleFontSize: {
            type: 'number',
            default: 24,
        },
        subtitleFontSize: {
            type: 'number',
            default: 18,
        },
        titleFontFamily: {
            type: 'string',
            default: 'Arial',
        },
        subtitleFontFamily: {
            type: 'string',
            default: 'Arial',
        },
        titleFontStyle: {
            type: 'string',
            default: 'normal',
        },
        subtitleFontStyle: {
            type: 'string',
            default: 'normal',
        },
        titlePosition: {
            type: 'string',
            default: 'center',
        },
        subtitlePosition: {
            type: 'string',
            default: 'center',
        },
        buttonPosition: {
            type: 'string',
            default: 'center',
        },
        buttonFontSize: {
            type: 'number',
            default: 16,
        },
        buttonFontFamily: {
            type: 'string',
            default: 'Arial',
        },
        buttonFontStyle: {
            type: 'string',
            default: 'normal',
        },
        buttonSize: {
            type: 'string',
            default: 'medium',
        },
    },

    edit({ attributes, setAttributes }) {
        const { title, subtitle, buttonText, buttonUrl, imageUrl, imageSize, imageAlignment, titleFontSize, subtitleFontSize, titleFontFamily, subtitleFontFamily, titleFontStyle, subtitleFontStyle, titlePosition, subtitlePosition, buttonPosition, buttonFontSize, buttonFontFamily, buttonFontStyle, buttonSize } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Image Settings">
                        <SelectControl
                            label="Image Size"
                            value={imageSize}
                            options={[
                                { label: 'Small', value: 'small' },
                                { label: 'Medium', value: 'medium' },
                                { label: 'Large', value: 'large' },
                            ]}
                            onChange={(value) => setAttributes({ imageSize: value })}
                        />
                        <SelectControl
                            label="Image Alignment"
                            value={imageAlignment}
                            options={[
                                { label: 'Left', value: 'left' },
                                { label: 'Center', value: 'center' },
                                { label: 'Right', value: 'right' },
                            ]}
                            onChange={(value) => setAttributes({ imageAlignment: value })}
                        />
                    </PanelBody>

                    <PanelBody title="Text Settings">
                        <TextControl
                            label="Title Font Size"
                            value={titleFontSize}
                            type="number"
                            onChange={(value) => setAttributes({ titleFontSize: parseInt(value, 10) })}
                        />
                        <TextControl
                            label="Subtitle Font Size"
                            value={subtitleFontSize}
                            type="number"
                            onChange={(value) => setAttributes({ subtitleFontSize: parseInt(value, 10) })}
                        />
                        <SelectControl
                            label="Title Font Family"
                            value={titleFontFamily}
                            options={[
                                { label: 'Arial', value: 'Arial' },
                                { label: 'Georgia', value: 'Georgia' },
                                { label: 'Times New Roman', value: 'Times New Roman' },
                                { label: 'Courier New', value: 'Courier New' },
                                { label: 'Verdana', value: 'Verdana' },
                            ]}
                            onChange={(value) => setAttributes({ titleFontFamily: value })}
                        />
                        <SelectControl
                            label="Subtitle Font Family"
                            value={subtitleFontFamily}
                            options={[
                                { label: 'Arial', value: 'Arial' },
                                { label: 'Georgia', value: 'Georgia' },
                                { label: 'Times New Roman', value: 'Times New Roman' },
                                { label: 'Courier New', value: 'Courier New' },
                                { label: 'Verdana', value: 'Verdana' },
                            ]}
                            onChange={(value) => setAttributes({ subtitleFontFamily: value })}
                        />
                        <SelectControl
                            label="Title Font Style"
                            value={titleFontStyle}
                            options={[
                                { label: 'Normal', value: 'normal' },
                                { label: 'Italic', value: 'italic' },
                                { label: 'Oblique', value: 'oblique' },
                            ]}
                            onChange={(value) => setAttributes({ titleFontStyle: value })}
                        />
                        <SelectControl
                            label="Subtitle Font Style"
                            value={subtitleFontStyle}
                            options={[
                                { label: 'Normal', value: 'normal' },
                                { label: 'Italic', value: 'italic' },
                                { label: 'Oblique', value: 'oblique' },
                            ]}
                            onChange={(value) => setAttributes({ subtitleFontStyle: value })}
                        />
                        <SelectControl
                            label="Title Position"
                            value={titlePosition}
                            options={[
                                { label: 'Left', value: 'left' },
                                { label: 'Center', value: 'center' },
                                { label: 'Right', value: 'right' },
                            ]}
                            onChange={(value) => setAttributes({ titlePosition: value })}
                        />
                        <SelectControl
                            label="Subtitle Position"
                            value={subtitlePosition}
                            options={[
                                { label: 'Left', value: 'left' },
                                { label: 'Center', value: 'center' },
                                { label: 'Right', value: 'right' },
                            ]}
                            onChange={(value) => setAttributes({ subtitlePosition: value })}
                        />
                    </PanelBody>

                    <PanelBody title="Button Settings">
                        <TextControl
                            label="Button Text"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                        />
                        <TextControl
                            label="Button URL"
                            value={buttonUrl}
                            onChange={(value) => setAttributes({ buttonUrl: value })}
                        />
                        <TextControl
                            label="Button Font Size"
                            value={buttonFontSize}
                            type="number"
                            onChange={(value) => setAttributes({ buttonFontSize: parseInt(value, 10) })}
                        />
                        <SelectControl
                            label="Button Font Family"
                            value={buttonFontFamily}
                            options={[
                                { label: 'Arial', value: 'Arial' },
                                { label: 'Georgia', value: 'Georgia' },
                                { label: 'Times New Roman', value: 'Times New Roman' },
                                { label: 'Courier New', value: 'Courier New' },
                                { label: 'Verdana', value: 'Verdana' },
                            ]}
                            onChange={(value) => setAttributes({ buttonFontFamily: value })}
                        />
                        <SelectControl
                            label="Button Font Style"
                            value={buttonFontStyle}
                            options={[
                                { label: 'Normal', value: 'normal' },
                                { label: 'Italic', value: 'italic' },
                                { label: 'Oblique', value: 'oblique' },
                            ]}
                            onChange={(value) => setAttributes({ buttonFontStyle: value })}
                        />
                        <SelectControl
                            label="Button Position"
                            value={buttonPosition}
                            options={[
                                { label: 'Left', value: 'left' },
                                { label: 'Center', value: 'center' },
                                { label: 'Right', value: 'right' },
                            ]}
                            onChange={(value) => setAttributes({ buttonPosition: value })}
                        />
                        <SelectControl
                            label="Button Size"
                            value={buttonSize}
                            options={[
                                { label: 'Small', value: 'small' },
                                { label: 'Medium', value: 'medium' },
                                { label: 'Large', value: 'large' },
                            ]}
                            onChange={(value) => setAttributes({ buttonSize: value })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="ssgb-dynamic-block">
                    <MediaUpload
                        onSelect={(media) => setAttributes({ imageUrl: media.url })}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <Button onClick={open}>
                                {imageUrl ? <img src={imageUrl} alt="Selected Image" className={`align${imageAlignment} ${imageSize}`} /> : 'Upload Image'}
                            </Button>
                        )}
                    />
                    <RichText
                        tagName="h2"
                        placeholder="Enter title..."
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        style={{
                            fontSize: `${titleFontSize}px`,
                            fontFamily: titleFontFamily,
                            fontStyle: titleFontStyle,
                            textAlign: titlePosition,
                        }}
                    />
                    <RichText
                        tagName="h4"
                        placeholder="Enter subtitle..."
                        value={subtitle}
                        onChange={(value) => setAttributes({ subtitle: value })}
                        style={{
                            fontSize: `${subtitleFontSize}px`,
                            fontFamily: subtitleFontFamily,
                            fontStyle: subtitleFontStyle,
                            textAlign: subtitlePosition,
                        }}
                    />
                    <a href={buttonUrl} className={`ssgb-button align${buttonPosition} ${buttonSize}`} style={{
                        fontSize: `${buttonFontSize}px`,
                        fontFamily: buttonFontFamily,
                        fontStyle: buttonFontStyle,
                    }}>
                        {buttonText}
                    </a>
                </div>
            </>
        );
    },

    save({ attributes }) {
        const { title, subtitle, buttonText, buttonUrl, imageUrl, imageSize, imageAlignment, titleFontSize, subtitleFontSize, titleFontFamily, subtitleFontFamily, titleFontStyle, subtitleFontStyle, titlePosition, subtitlePosition, buttonPosition, buttonFontSize, buttonFontFamily, buttonFontStyle, buttonSize } = attributes;

        return (
            <div className="ssgb-dynamic-block">
                {imageUrl && <img src={imageUrl} className={`align${imageAlignment} ${imageSize}`} alt="Block Image" />}
                {title && <h2 style={{
                    fontSize: `${titleFontSize}px`,
                    fontFamily: titleFontFamily,
                    fontStyle: titleFontStyle,
                    textAlign: titlePosition,
                }}>{title}</h2>}
                {subtitle && <h4 style={{
                    fontSize: `${subtitleFontSize}px`,
                    fontFamily: subtitleFontFamily,
                    fontStyle: subtitleFontStyle,
                    textAlign: subtitlePosition,
                }}>{subtitle}</h4>}
                <a href={buttonUrl} className={`ssgb-button align${buttonPosition} ${buttonSize}`} style={{
                    fontSize: `${buttonFontSize}px`,
                    fontFamily: buttonFontFamily,
                    fontStyle: buttonFontStyle,
                }}>
                    {buttonText}
                </a>
            </div>
        );
    },
});
