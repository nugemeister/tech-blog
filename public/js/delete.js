const deletePostHandler = async (post_id) => {

  
    if (post_id) {
      const response = await fetch('/api/post/' + post_id, {
        method: 'delete',
        body: JSON.stringify({ post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/gallery');
      } else {
        alert('Failed to delete post.');
      }
    }
  };
