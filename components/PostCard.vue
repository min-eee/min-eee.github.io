<template>
  <div class="post-card">
    <div class="post-image">
      <div v-if="post.image" class="post-image-container">
        <img :src="post.image" :alt="post.title">
      </div>
      <div v-else class="post-image-placeholder"></div>
    </div>
    <div class="post-content">
      <div class="post-date">{{ formatDate(post.date) }}</div>
      <h3 class="post-title">{{ post.title }}</h3>
      <p class="post-description">{{ post.description }}</p>
      <a href="#" class="read-more">더 읽기</a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

// 날짜 포맷팅 함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<style scoped>
.post-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.post-image {
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 20px;
}

.post-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
}

.post-title {
  font-size: 1.4rem;
  margin: 10px 0;
  line-height: 1.3;
  color: #333;
}

.post-description {
  color: #555;
  margin-bottom: 15px;
  line-height: 1.5;
}

.read-more {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding-bottom: 2px;
}

.read-more::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3498db;
  transition: width 0.3s ease;
}

.read-more:hover::after {
  width: 100%;
}

.post-image-placeholder {
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 