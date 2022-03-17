/**
 * Returns an embed builder.
 */
class EmbedBuilder {
	/**
	 * Constructs a new embed builder.
	 * @param {Object} data The data to construct the embed with
	 */
	constructor(data = {}) {
		this.fields = [];
		Object.assign(this, data);

		return this;
	}

	/**
	 * Sets the author field of the embed.
	 * @param {String} name The name of the author
	 * @param {String} icon The icon of the author
	 * @param {String} url The url of the author
	 * @returns EmbedBuilder
	 */
	setAuthor(name, icon = null, url = null) {
		this.author = { name, icon_url: icon, url };

		return this;
	}

	/**
	 * Sets the color of the embed.
	 * @param {String} color The color of the embed
	 * @returns EmbedBuilder
	 */
	setColor(color) {
		this.color = typeof color === 'string' ? parseInt(color) : color;

		return this;
	}

	/**
	 * Sets the description of the embed.
	 * @param {String} description The description of the embed
	 * @returns EmbedBuilder
	 */
	setDescription(desc) {
		this.description = desc.toString().substring(0, 4096);

		return this;
	}
	/**
	 * Adds a field to the embed.
	 * @param {String} name The name of the field 
	 * @param {String} value The value of the field
	 * @param {Boolean} inline Whether or not the field should be inline
	 * @returns EmbedBuilder
	 */
	addField(name, value, inline = false) {
		if(this.fields.length >= 25) return this;
		else if(!name) return this;
		else if(!value) return false;
		this.fields.push({ name: name.toString().substring(0, 256), value: value.toString().substring(0, 1024), inline });

		return this;
	}

	// setFile(file) {
	// 	this.file = file;

	// 	return this;
	// }

	/**
	 * Sets the footer of the embed.
	 * @param {String} text The text of the footer
	 * @param {String} icon The icon of the footer
	 * @returns EmbedBuilder
	 */
	setFooter(text, icon = null) {
		this.footer = { text: text.toString().substring(0, 2048), icon_url: icon };

		return this;
	}

	/**
	 * Sets the image of the embed.
	 * @param {String} url The url of the image
	 * @returns EmbedBuilder
	 */
	setImage(url) {
		this.image = { url };

		return this;
	}

	/**
	 * Sets the timestamp of the embed.
	 * @param {Date} timestamp The timestamp of the embed
	 * @returns EmbedBuilder
	 */
	setTimestamp(time = new Date()) {
		this.timestamp = time.toISOString();

		return this;
	}

	/**
	 * Sets the title of the embed.
	 * @param {String} title The title of the embed
	 * @returns EmbedBuilder
	 */
	setTitle(title) {
		this.title = title.toString().substring(0, 256);

		return this;
	}

	/**
	 * Sets the thumbnail of the embed.
	 * @param {String} url The url of the thumbnail
	 * @returns EmbedBuilder
	 */
	setThumbnail(url) {
		this.thumbnail = { url };

		return this;
	}

	/**
	 * Sets the title URL of the embed.
	 * @param {String} url The url of the embed title
	 * @returns EmbedBuilder
	 */
	setUrl(url) {
		this.url = url;

		return this;
	}

	/**
	 * Returns the embed as a JSON object.
	 * @returns {Object} The embed object
	 */
	toJSON() {
		return {
			...this,
			type: 'rich'
		};
	}
}