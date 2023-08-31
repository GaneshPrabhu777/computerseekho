package com.example.entities;


	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.JoinColumn;
	import jakarta.persistence.ManyToOne;


	@Entity
	public class Image {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int image_id;
		private String image_path;
		private boolean imagage_is_active;
		private boolean is_album_cover;
		
		@ManyToOne
		@JoinColumn(name="album_id")
		private Album album;

		public Image() {
			super();
			
		}

		public Image(int image_id, String image_path, boolean imagage_is_activate, boolean is_album_cover) {
			super();
			this.image_id = image_id;
			this.image_path = image_path;
			this.imagage_is_active = imagage_is_activate;
			this.is_album_cover = is_album_cover;
		}

		

		public int getImage_id() {
			return image_id;
		}

		@Override
		public String toString() {
			return "Image [image_id=" + image_id + ", image_path=" + image_path + ", imagage_is_activate="
					+ imagage_is_active + ", is_album_cover=" + is_album_cover + "]";
		}

		public void setImage_id(int image_id) {
			this.image_id = image_id;
		}

		public String getImage_path() {
			return image_path;
		}

		public void setImage_path(String image_path) {
			this.image_path = image_path;
		}

		public boolean isImagage_is_active() {
			return imagage_is_active;
		}

		public void setImagage_is_active(boolean imagage_is_activate) {
			this.imagage_is_active = imagage_is_activate;
		}

		public boolean isIs_album_cover() {
			return is_album_cover;
		}

		public void setIs_album_cover(boolean is_album_cover) {
			this.is_album_cover = is_album_cover;
		}

	}



