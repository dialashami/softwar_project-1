// src/pages/LessonVideoEditor.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function LessonVideoEditor() {
  const { lessonId } = useParams();

  // 🔹 لينكات أونلاين (YouTube, Vimeo, ... إلخ)
  const [videoUrls, setVideoUrls] = useState(['']);

  // 🔹 فيديوهات مرفوعة من جهاز المعلم
  const [uploadedVideos, setUploadedVideos] = useState([]); 
  // كل عنصر: { file, name, previewUrl }

  // علشان نعرف إذا المعلم كبس Save
  const [saved, setSaved] = useState(false);

  const handleVideoChange = (index, value) => {
    const copy = [...videoUrls];
    copy[index] = value;
    setVideoUrls(copy);
    setSaved(false); // لو عدّل بعد الحفظ نرجع نخفي رسالة "تم الحفظ"
  };

  const handleAddVideoField = () => {
    setVideoUrls([...videoUrls, '']);
    setSaved(false);
  };

  // ✅ لما يختار فيديو من الجهاز
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newUploaded = files.map((file) => ({
      file,
      name: file.name,
      previewUrl: URL.createObjectURL(file),
    }));

    setUploadedVideos((prev) => [...prev, ...newUploaded]);
    setSaved(false);
  };

  const handleSave = () => {
    // هنا المفروض تبعتي الفيديوهات للـ backend:
    // - videoUrls: لينكات أونلاين
    // - uploadedVideos: فيها ملفات الفيديو نفسها
    console.log('Saving videos for lesson', lessonId, {
      urls: videoUrls,
      uploadedFiles: uploadedVideos.map((v) => v.name),
    });

    setSaved(true);
  };

  // ✅ helper بسيطة عشان نعرف إذا اللينك يوتيوب ونطلع embed URL
  const getYouTubeEmbedUrl = (url) => {
    try {
      if (!url) return null;
      const ytRegex =
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
      const match = url.match(ytRegex);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
      return null;
    } catch {
      return null;
    }
  };

  // نفلتر اللينكات الفاضية
  const nonEmptyVideos = videoUrls
    .map((u) => u.trim())
    .filter((u) => u.length > 0);

  const hasAnyVideos =
    nonEmptyVideos.length > 0 || uploadedVideos.length > 0;

  return (
    <div className="lesson-video-editor">
      <h1>Lesson #{lessonId} – Videos</h1>
      <p>Add online links or upload videos from your device for this lesson.</p>

      {/* ====== فورم إدخال الفيديوهات للمعلم (لينكات) ====== */}
      <div className="videos-form">
        {videoUrls.map((url, index) => (
          <div key={index} className="form-group">
            <label>Video URL #{index + 1}</label>
            <input
              type="text"
              value={url}
              onChange={(e) => handleVideoChange(index, e.target.value)}
              placeholder="Paste video URL (YouTube, Vimeo, ...)"
            />
          </div>
        ))}

        <button type="button" onClick={handleAddVideoField}>
          + Add another video URL
        </button>
      </div>

      {/* ====== رفع فيديو من الجهاز ====== */}
      <div
        className="form-group"
        style={{ marginTop: 20, borderTop: '1px solid #e5e7eb', paddingTop: 14 }}
      >
        <label>Upload videos from your device</label>
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleFileChange}
        />
        <p style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
          You can select one or more video files (e.g., MP4).
        </p>

        {uploadedVideos.length > 0 && (
          <ul style={{ marginTop: 8, paddingLeft: 18, fontSize: 13, color: '#4b5563' }}>
            {uploadedVideos.map((v, i) => (
              <li key={i}>Attached: {v.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '16px' }}>
        <button onClick={handleSave} className="create-lesson-btn">
          Save Videos
        </button>
        {saved && hasAnyVideos && (
          <span style={{ marginLeft: 10, fontSize: 13, color: '#16a34a' }}>
            ✓ Videos saved (preview below)
          </span>
        )}
      </div>

      {/* ====== Preview: كيف اليوزر/الطالب رح يشوف الفيديوهات ====== */}
      {saved && hasAnyVideos && (
        <div
          className="lesson-student-preview"
          style={{
            marginTop: '24px',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '16px',
          }}
        >
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Student View</h2>
          <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 12 }}>
            This is how students will see and open the lesson videos:
          </p>

          {/* 🔹 لينكات أونلاين */}
          {nonEmptyVideos.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              {nonEmptyVideos.map((url, index) => {
                const embedUrl = getYouTubeEmbedUrl(url);

                return (
                  <div
                    key={index}
                    style={{
                      marginBottom: 16,
                      padding: 12,
                      borderRadius: 12,
                      border: '1px solid #e5e7eb',
                      background: '#f9fafb',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: embedUrl ? 8 : 0,
                      }}
                    >
                      <span style={{ fontSize: 14, fontWeight: 500 }}>
                        Online Video #{index + 1}
                      </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: 13,
                          color: '#2563eb',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        Open video
                      </a>
                    </div>

                    {/* لو يوتيوب نعرضه كـ iframe */}
                    {embedUrl && (
                      <div style={{ marginTop: 8 }}>
                        <iframe
                          width="100%"
                          height="260"
                          src={embedUrl}
                          title={`Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{ borderRadius: 12, border: 'none' }}
                        ></iframe>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* 🔹 فيديوهات مرفوعة من الجهاز */}
          {uploadedVideos.length > 0 && (
            <div>
              {uploadedVideos.map((v, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: 16,
                    padding: 12,
                    borderRadius: 12,
                    border: '1px solid #e5e7eb',
                    background: '#eef2ff',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 500 }}>
                      Uploaded Video #{index + 1}
                    </span>
                    <span style={{ fontSize: 12, color: '#4b5563' }}>
                      {v.name}
                    </span>
                  </div>

                  <video
                    width="100%"
                    height="260"
                    controls
                    src={v.previewUrl}
                    style={{ borderRadius: 12, outline: 'none' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* لو حفظ وما في ولا لينك ولا فيديو */}
      {saved && !hasAnyVideos && (
        <p style={{ marginTop: 16, fontSize: 13, color: '#dc2626' }}>
          You saved, but there are no videos yet (URLs or uploaded files).
        </p>
      )}
    </div>
  );
}

export default LessonVideoEditor;
